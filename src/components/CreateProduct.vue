<template>
  <div
    class="main grid-cols-4 h-screen col-gap-2 row-gap-8 text-blue-100 p-8 ml-10"
  >
    <div class="flex flex-col col-start-1 col-end-4 items-start ">
      <label class="input-label" for="title">Product Title</label>
      <input class="input" type="text" name="title" v-model="product.title" />
    </div>
    <div
      class="flex flex-col col-start- col-end-5 row-start-2 items-center p-6 text-3xl"
    >
      <SideBarHeading label="Select Category" />
      <div class="cat-item">
        Clothing
      </div>
      <div class="cat-item">Jewelries</div>
      <div class="cat-item">Phones</div>
    </div>
    <div
      class="flex flex-col col-start-1 col-end-4 row-start-2 row-end-3 items-start "
    >
      <label class="input-label" for="title">Product Description</label>
      <textarea
        v-model="product.description"
        class="w-full h-full text-4xl text-blue-750 rounded-lg p-3"
        name="description"
        id=""
        cols="150"
        rows="50"
      ></textarea>
    </div>

    <div
      class="flex justify-between col-start-1 col-end-4 row-start-3 row-end-4 items-start "
    >
      <div class="flex flex-col items-start">
        <label class="input-label" for="title">Regular Price</label>
        <input
          class="input"
          type="number"
          name="title"
          v-model="product.price"
        />
      </div>
      <div class="flex flex-col items-start">
        <label class="input-label" for="title">Sale Price</label>
        <input
          class="input"
          type="number"
          name="title"
          v-model="product.salePrice"
        />
      </div>
    </div>
    <div
      class=" h-full rounded-md flex flex-col grid-cols-4 col-start-1 col-end-4 row-start-4 row-end-5 items-start cursor-pointer"
    >
      <label class="input-label" for="title">Upload Images</label>
      <!-- <div class="grid grid-cols-4"> -->
      <vue-dropzone
        class="bg-gray-100 w-full flex py-4"
        ref="uploadDropZone"
        id="uploadDropZone"
        :options="dropzoneOptions"
        :include-styling="false"
        :useCustomSlot="true"
        @vdropzone-thumbnail="setThumb"
        @vdropzone-upload-progress="uploadProgress"
        @vdropzone-file-added="fileAdded"
        @vdropzone-sending="sendingFile"
        @vdropzone-success-multiple="success"
      >
        <AttachmentList :images="getImages" />
      </vue-dropzone>
      <!-- </div> -->
    </div>
    <div class="row-start-5 row-end-6">
      <btn label="Submit" :onClick="submit" color="light"></btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import Button from "@/components/Button.vue";
import SideBarHeading from "@/components/SideBarHeading.vue";
import AttachmentList from "@/components/AttachmentList.vue";
import axios from "axios";
import { User } from "@/types/types";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import { mapState } from "vuex";

interface Image {
  id?: string;
  path: string;
  progress?: number | null;
  thumbnail?: string;
  size?: number;
}
interface Product {
  title: string;
  images: Array<{ id: number | null; url: string }>;
  price: number;
  salePrice: number;
  description: string;
}

@Component({
  components: {
    btn: Button,
    SideBarHeading,
    vueDropzone: vue2Dropzone,
    AttachmentList,
  },
  computed: mapState({
    token: (state: any) => state.user.token,
  }),
})
export default class CreateProduct extends Vue {
  product: Product = {
    title: "",
    images: [],
    price: 0,
    salePrice: 0,
    description: "",
  };

  dropzoneOptions: object = {
    url: `${process.env.VUE_APP_SERVER_URL}/upload`,
    headers: {
      Authorization: `Bearer ${this.token}`,
    },
    autoDiscover: false,
    thumbnailWidth: 100,
    maxFilesize: 5,
    acceptedFiles: "image/*",
    dictDefaultMessage: "Click or Drag Files here to upload",
    includeStyling: false,
    previewsContainer: false,
    thumbnailHeight: 100,
    uploadMultiple: true,
    parallelUploads: 3,
  };

  images: Array<Image> = [];
  acceptedTypes: Array<string> = ["image/png", "image/jpg", "image/jpeg"];
  get token() {
    return this.$store.state.user.token;
  }

  get getImages() {
    return this.images;
  }

  async submit() {
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${this.token}`;
      const product = await axios.post(
        `${process.env.VUE_APP_SERVER_URL}/products`,
        // `http://localhost:5000/products`,

        <any>this.product
      );
    } catch (error) {
      console.log(error.response);
    }

    this.product.images = [];
    this.images = [];
  }

  fileAdded(file) {
    let image: Image = {
      id: file.upload.uuid,
      progress: null,
      path: `http://localhost:5000/public/images/${this.formatImageTitle(
        file.name,
        12
      )}`,
      thumbnail: file.dataURL,
      size: file.size / 1000000,
    };
    this.images.push(image);
  }

  uploadProgress(file, progress, bytesSent) {
    this.images.map((img) => {
      if (img.id == file.upload.uuid) {
        img.progress = Math.round(progress);
      }
    });
    console.log(progress, "progress");
    console.log(bytesSent, "bytes");
  }

  formatImageTitle(str: string, num: number) {
    str = str
      .toLowerCase()
      .split(" ")
      .join("-");
    let ext = str.split(".");
    if (str.length <= num) {
      return `${Date.now()}-${str + "." + ext[ext.length - 1]}`;
    }
    return `${Date.now()}-${str.slice(0, num) + "." + ext[ext.length - 1]}`;
  }

  sendingFile(file, xhr, formData) {
    const imageTitle = this.formatImageTitle(file.name, 12);
    this.product.images.push({ url: imageTitle, id: 12 });
    formData.append("fileName", imageTitle);
  }

  setThumb(file, thumbnail) {
    console.log(thumbnail);
    this.images.map((img) => {
      if (img.id == file.upload.uuid) {
        img.thumbnail = thumbnail;
      }
    });

    // console.log(this.images);
  }
  success(file, res) {
    console.log("file sent");
    console.log(file, res);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main {
  display: grid;
  grid-template-rows: repeat(6, minmax(0, min-content));
}

.attach {
  grid-column: 2/-1;
}

#uploadDropZone {
  display: flex;
  align-items: center;
}

.input {
  @apply w-full px-5 bg-white bg-gray-200 text-blue-750 
  rounded-lg overflow-hidden py-4 text-3xl leading-tight border-none appearance-none;
  border-bottom: solid 2px transparent;
  &:focus {
    border-bottom: solid 2px blue;
    @apply outline-none bg-white border-blue-650;
  }

  &-label {
    @apply text-gray-600 text-4xl tracking-wide;
  }
}

.cat-item {
  @apply border border-gray-200 w-full py-2 mx-6 my-3 rounded-full;
}
</style>
