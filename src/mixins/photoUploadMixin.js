import vue2Dropzone from 'vue2-dropzone'

export default {
  components: {
    vueDropzone: vue2Dropzone
  },

  data () {
    return {
      uploadDialog: false,
      isUploading: false,
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        thumbnailWidth: 190,
        maxFilesize: 50,
        maxFiles: 1,
        headers: { 'My-Awesome-Header': 'header value' },
        autoDiscover: false,
        autoProcessQueue: false,
        autoQueue: false,
        acceptedFiles: 'image/*',
        init: function () {
          this.on('addedfile', function () {
            if (this.files[1] != null) {
              this.removeFile(this.files[0])
            }
          })
        }
      }
    }
  },

  methods: {
    showUploadDialog () {
      this.uploadDialog = true
    },

    closeUploadDialog () {
      this.uploadDialog = false
    },

    uploadImages (dataUrl) {
      //
      return new Promise(resolve => {
        resolve('https://nusinsyte.blob.core.windows.net/message-images/ninja.fc341313-7965-48be-8ef9-d6435205e1c7.jpg')
      })
    },

    readUrl (file) {
      if (file) {
        var reader = new FileReader()
        reader.onload = (e) => {
          return e.target.result
        }
        reader.readAsDataURL(file)
      }
    },

    async getDataUrl (files) {
      const file = files[0]
      const filename = file.name || file.localURL
      const filetype = file.type
      const reader = new FileReader()
      let dataUrl
      await new Promise((resolve, reject) => {
        reader.onload = (readerEvent) => {
          const image = new Image()
          image.onload = (imageEvent) => {
            const canvas = document.createElement('canvas')
            const maxSize = 192
            let width = image.width
            let height = image.height
            if (width > height) {
              if (width > maxSize) {
                height *= maxSize / width
                width = maxSize
              }
            } else {
              if (height > maxSize) {
                width *= maxSize / height
                height = maxSize
              }
            }
            canvas.width = width
            canvas.height = height
            canvas.getContext('2d').drawImage(image, 0, 0, width, height)
            dataUrl = canvas.toDataURL(filetype)
            dataUrl = this.dataURLToBlob(dataUrl)
            resolve(1)
          }
          image.src = readerEvent.target.result
        }
        reader.readAsDataURL(file)
      })

      dataUrl.name = filename
      dataUrl.localURL = filename
      dataUrl.lastModifiedDate = new Date().getTime()
      return dataUrl
    },

    dataURLToBlob (dataURL) {
      const BASE64_MARKER = ';base64,'
      let parts, contentType, raw
      if (dataURL.indexOf(BASE64_MARKER) === -1) {
        parts = dataURL.split(',')
        contentType = parts[0].split(':')[1]
        raw = parts[1]
        return new Blob([raw], { type: contentType })
      }

      parts = dataURL.split(BASE64_MARKER)
      contentType = parts[0].split(':')[1]
      raw = window.atob(parts[1])
      const rawLength = raw.length

      const uInt8Array = new Uint8Array(rawLength)

      for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i)
      }

      return new Blob([uInt8Array], { type: contentType })
    }
  }
}
