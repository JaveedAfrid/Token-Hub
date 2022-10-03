import React from 'react';
import { Upload } from '@aws-sdk/lib-storage';
import { S3Client } from '@aws-sdk/client-s3';
import credentials from './credentials/key';

let fileDetails = '';

// Getting the file details
const getFileDetails = (file) => {
    fileDetails = file.target.files[0];
    console.log(fileDetails)
}

const uploadToS3 = () => {
  const target = {
    Bucket:'sampledumpreact', 
    Key:fileDetails.name, 
    Body:fileDetails
  };

  // Providing AWS credentials
  const creds = {
    accessKeyId: credentials.accessKeyId,
    secretAccessKey: credentials.secretAccessKey
  };

  try{
    // Uploading 
      const parallelUploads3 = new Upload({
          client: new S3Client({region: 'ap-south-1', credentials:creds}),
          leavePartsOnError: false,
          params: target
      });
      parallelUploads3.on("httpUploadProgress", (progress) => {
          console.log(progress);
      });

       parallelUploads3.done();
  }catch(e){
      console.log(e);
  }
  
}

const UploadCsv = () => {
  return (
    <div>
        
        <div> 
  <h5 className="display-8">Please upload the .csv file (admin only)</h5></div>

        <input type="file" onChange={getFileDetails}/>
        <button className="btn btn-primary" onClick={uploadToS3}> Upload to S3</button>

    </div>
  )
}

export default UploadCsv