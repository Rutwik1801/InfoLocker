import { doc, setDoc,updateDoc ,collection,addDoc,getDoc,getDocs,deleteDoc} from "firebase/firestore"; 
import { getStorage, ref, uploadBytes,getDownloadURL,deleteObject } from "firebase/storage";
import { db } from "./firebase";

// create object when user logs in
export const createUserData=async(uid)=>{
    const docRef=await setDoc(doc(db,"Data",uid),{
        userId:uid
    })
}

// send the dataform data
export const postUserEnteredData=async(label,value,uid,type,docId,edit)=>{
  console.log(docId,"conoleeee")
    try {
        if(!edit){
          if(type==="files"){
            const docRef=await addDoc(collection(db,"Data",uid,type),{
              label:label,
              value:value.fileName,
              url:value.url
          })
          }else{
            const docRef=await addDoc(collection(db,"Data",uid,type),{
              label:label,
              value:value
          })
          }
        }else{
          if(type==="files"){
            const docRef=await setDoc(doc(db,"Data",uid,type,docId),{
              label:label,
              value:value.fileName,
              url:value.url
          })
          }else{
            const docRef=await setDoc(doc(db,"Data",uid,type,docId),{
              label:label,
              value:value
          })
          }
        }
      } catch (e) {
        console.error("Error adding document: ", e);
      }

}
// delete user data
export const deleteData=async (uid,type,docId,value)=>{
  try {
    const docPath = `Data/${uid}/${type}/${docId}`;
    const res = await deleteDoc(doc(db, docPath));
    if(type==="files"){
      // file delete code
      const storage = getStorage();

      // Create a reference to the file to delete
      const deleteRef = ref(storage, `${uid}/${value}`);
      
      // Delete the file
      deleteObject(deleteRef).then(() => {
        // File deleted successfully
        console.log("deleted success")
      }).catch((error) => {
        // Uh-oh, an error occurred!
        console.log(error)
      });

    }
    console.log("Document successfully deleted:", res);
  } catch (err) {
    console.error("Error deleting the document:", err);
  }
}
export const getUserData=async(uid)=>{
    const docRef = doc(db, "Data", uid);
const docSnap = await getDoc(docRef);
const detailsCollectionSnap=await getDocs(collection(db, "Data", uid,"details"))
const linksCollectionSnap=await getDocs(collection(db, "Data", uid,"links"))
const filesCollectionSnap=await getDocs(collection(db, "Data", uid,"files"))
let detailsCollection=[]
let linksCollection=[]
let filesCollection=[]
if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
detailsCollectionSnap.forEach(doc=>{
  detailsCollection.push({...doc.data(),docId:doc.id})
})
linksCollectionSnap.forEach(doc=>{
    linksCollection.push({...doc.data(),docId:doc.id})
  })
  filesCollectionSnap.forEach(doc=>{
    filesCollection.push({...doc.data(),docId:doc.id})
  })

} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
return {
    details:detailsCollection,
    links:linksCollection,
    files:filesCollection
}
}



export const uploadFileData=async (uid,type,docId,edit,file,label)=>{

  // Create a root reference
  const storage = getStorage();
  
  // Create a reference to 'mountains.jpg'
  const fileRef = ref(storage,`${uid}/${file.name}`);
  
  // Create a reference to 'images/mountains.jpg'
  // const uploadTask = uploadBytesResumable(fileRef, file);
  
   uploadBytes(fileRef, file).then((snapshot) => {
    console.log(snapshot)
    console.log('Uploaded a blob or file!');
  })
  getDownloadURL(fileRef)
  .then((url) => {
    console.log(url)
    postUserEnteredData(label,{fileName:file.name,url:url},uid,type,docId,edit)



    // `url` is the download URL for 'images/stars.jpg'

    // // This can be downloaded directly:
    // const xhr = new XMLHttpRequest();
    // xhr.responseType = 'blob';
    // xhr.onload = (event) => {
    //   const blob = xhr.response;
    // };
    // xhr.open('GET', url);
    // xhr.send();

    // // Or inserted into an <img> element
    // const img = document.getElementById('myimg');
    // img.setAttribute('src', url);
  })
  .catch((error) => {
    // Handle any errors
  });
}