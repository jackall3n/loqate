declare global {
  interface Window {
    pca: PostCodeAnywhere;
  }
}

interface PostCodeAnywhere {
  Address(fields: Fields, options: Options): Address
}

interface Address {
}

interface Fields {

}

interface Options {

}

const PostCodeAnywhere = window.pca;

export default PostCodeAnywhere;
