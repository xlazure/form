import { useState } from "react";
import {
  CloseBtn,
  InputFile,
  Overlay,
  PreviewImg,
  ThumbImg,
} from "./form.style";

export default function ImageForm() {
  const [fileUrl, setFileUrl] = useState();
  const [preview, setPreview] = useState(false);

  //   function AscpectRatio(url) {
  //     // console.log(url);
  //     image.src = url;
  //     let x = image?.width / image?.height;
  //     let y = image?.height / image?.width;
  //     console.log(x, y);

  //     // setFileUrl(url);
  //   }
  //   useEffect(() => {
  //     console.log(fileUrl);
  //     let image = new Image();

  //     image.src = fileUrl;
  //     let x = image.width / image.height;
  //     let y = image.height / image.width;
  //     console.log(x, y);
  //   }, [fileUrl]);

  return (
    <>
      <InputFile
        type="file"
        accept="image/jpeg"
        onChange={(e) => {
          setFileUrl(URL.createObjectURL(e.target.files[0]));
        }}
      />

      {fileUrl && (
        <ThumbImg
          src={fileUrl}
          alt="image"
          width="64"
          height="64"
          onClick={() => setPreview(!preview)}
          required
        />
      )}
      {preview && (
        <Overlay>
          <CloseBtn
            onClick={() => {
              setPreview(!preview);
            }}
          >
            Close
          </CloseBtn>
          <PreviewImg src={fileUrl} />
        </Overlay>
      )}
    </>
  );
}
