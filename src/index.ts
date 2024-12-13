import PinataSDK from '@pinata/sdk';
import 'dotenv/config';
import fs from 'fs';

// Pinata SDK
const pinata = new PinataSDK(
    process.env.PINATA_API_KEY || '',
    process.env.PINATA_SECRET_KEY || ''
);

// Upload file to IPFS
const uploadFile = async (filePath: string) => {
    try {
        const result = await pinata.pinFromFS(filePath);
        console.log(`File uploaded to IPFS with CID: ${result.IpfsHash}`);
        return result.IpfsHash;
    } catch (error) {
        console.error('Error uploading file to IPFS:', error);
        throw error;
    }
};

// Retrieve file from IPFS
const retrieveFile = async (cid: string) => {
    try {
        const url = `https://gateway.pinata.cloud/ipfs/${cid}`;
        const response = await fetch(url);
        const data = await response.text();
        console.log('File content retrieved from IPFS:', data);
        return data;
    } catch (error) {
        console.error('Error retrieving file from IPFS:', error);
        throw error;
    }
};

// Main
(async () => {
    try {
        const filePath = './uploadme.txt';
        const cid = await uploadFile(filePath);
        console.log(`CID: ${cid}`);
        
        const fileContent = await retrieveFile(cid);
        console.log(`Retrieved content: ${fileContent}`);
    } catch (error) {
        console.error('An error occurred:', error);
    }
})();
