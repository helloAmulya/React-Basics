import React from "react";
import { Editor } from "tinymce";
import { Controller } from "react-hook-form";

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl1">{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        // if there is any change in this field, then inform
        render={({ field: { onChange } }) => (
          <Editor
            initialValue={defaultValue}
            init={{
              initialValue: defaultValue,
              // what value we want just after initialization
              branding: false,
              height: 500,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
              ],

              toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help ",
              content_style:
                "body { font-family:Helvetica, Arial, sans-serif, font-size:14px }",

              /* 
              //   plugins : [
              //     "advlist autolink lists link image charmap print preview anchor",
              //     "searchreplace visualblocks code fullscreen",
              //     "insertdatetime media table paste code help wordcount",
              //   ],

              //   toolbar:
              //     " undo redo } formatselect | bold italic backcolor | \
              //      alignleft aligncenter alignright alignright alignjustify | \
              //      bullist numlist outdent indent | removeformat | help ",
              */
            }}
            onEditorChange={onChange}
          /> // editor ends here
        )}
      />
    </div>
  );
}

//   return (
//     <Editor
//       initialValue="default value"
//       init={{
//         // what value we want just after initialization
//         branding: false,
//         height: 500,
//         menubar: true,
//         plugins: [
//           "advlist autolink lists link image charmap print preview anchor",
//           "searchreplace visualblocks code fullscreen",
//           "insertdatetime media table paste code help wordcount",
//         ],
//         toolbar:
//           " undo redo } formatselect | bold italic backcolor | \
//     alignleft aligncenter alignright alignright alignjustify | \
//     bullist numlist outdent indent | removeformat | help ",
//       }}
//     />
//   );
