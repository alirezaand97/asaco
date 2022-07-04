import { ClassNames } from "@emotion/react";
import React, { useCallback, useEffect, useState } from "react";

interface IUploadInputInterface {
  multiple?: boolean;
  upload?: Function;
  limit?: number;
  accept?: string;
  calssNames?: string;
}
const IUploadInput: React.FC<IUploadInputInterface> = ({
  multiple = true,
  upload,
  limit = 3,
  accept = " image/jpeg",
  calssNames,
}) => {
  const [singleFile, setSingleFile] = useState<File[]>([]);
  const [fileList, setFileList] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<any>([]);
  const [error, setError] = useState<string>("");

  const imagePreviewUrl = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  

  const selectFile = (e: React.SyntheticEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    if (!target.files) return;

    if (multiple) {
      const newFiles = Object.values(target.files).map((file: File) => file);
      if (newFiles) {
        const updatedList = [...fileList, ...newFiles];
        console.log(fileList);
        // if (updatedList.length > limit || newFiles.length > 3) {
        //   setError(`لطفا فقط  ${limit} فایل وارد کنید`);
        //   return;
        // }
        // setError("");

        setFileList(updatedList);

        // let arr: any[] = [];
        // let images = updatedList.map((file: File, index: number) => {
        //    imagePreviewUrl(file).then(function (res) {
        //     arr.push(res);
        //   });
        // });

        let images = updatedList.map((file: File) => URL.createObjectURL(file));
      setPreviewImages(images);
        // setPreviewImages(arr);
      }
    }
  };

  return (
    <>
      <input
        type="file"
        multiple={multiple}
        onChange={selectFile}
        accept={accept}
        className={`${calssNames}`}
        disabled={false}
      />
      <div className="text-sm text-red-500">{error}</div>
      <div className="flex flex-wrap">
        {previewImages.map((image: any, index: number) => (
          <img src={image} key={index} className="w-1/2 m-1 h-32" />
        ))}
      </div>
    </>
  );
};

export default IUploadInput;
