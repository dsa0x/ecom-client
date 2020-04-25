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
      class="flex flex-col col-start-1 col-end-2 row-start-3 row-end-4 items-start "
    >
      <label class="input-label" for="title">Price</label>
      <input class="input" type="text" name="title" v-model="product.price" />
    </div>
    <div
      class=" h-full rounded-md bg-gray-100 grid grid-cols-4 col-start-1 col-end-4 row-start-4 row-end-5 items-start cursor-pointer"
    >
      <AttachmentList :images="images" />
      <vue-dropzone
        class="w-full flex col-start-1 col-end-2"
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
        <!-- <div class="flex flex-col">
          <span class=" text-8xl text-blue-1050 mdi mdi-cloud-upload"></span>
          <label class="input-label" for="title"
            >Drag Images here to upload</label
          >
          <button>Browse</button>
        </div> -->

        <span
          class="text-8xl text-blue-1050 flex items-center justify-center mdi mdi-image-plus w-64 h-64 m-4 bg-gray-200"
        ></span>
      </vue-dropzone>
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
  images: Array<string>;
  price: number;
  description: string;
}

process.env.SERVER_URL = "http://localhost:5000";
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
    description: "",
  };

  get getProduct() {
    return this.product;
  }

  dropzoneOptions: object = {
    url: `http://localhost:5000/upload`,
    headers: {
      Authorization: `Bearer ${this.token}`,
    },
    autoDiscover: false,
    thumbnailWidth: 100,
    maxFilesize: 2,
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

  async submit() {
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${this.token}`;
      const product = await axios.post(
        // `${process.env.SERVER_URL}/product`,
        `http://localhost:5000/products`,

        <any>this.product,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      );
    } catch (error) {
      console.log(error.response);
    }
  }

  fileAdded(file) {
    // console.log(file);
    this.product.images.push(file);
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
      return str + "." + ext[ext.length - 1];
    }
    return str.slice(0, num) + "." + ext[ext.length - 1];
  }

  sendingFile(file, xhr, formData) {
    const fileType = file.type.split("/")[1];
  }

  setThumb(file, thumbnail) {
    console.log(thumbnail);
    this.images.map((img) => {
      if (img.id == file.upload.uuid) {
        //   this.product.images.push(img.)
        img.thumbnail = thumbnail;
      }
    });

    console.log(this.images);
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

#uploadDropZone {
  display: flex;
  align-items: center;
}

.input {
  @apply w-full px-5 bg-white rounded-sm bg-gray-200 text-blue-750 
  rounded-r-lg overflow-hidden py-4 text-3xl leading-tight border-none appearance-none;
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
