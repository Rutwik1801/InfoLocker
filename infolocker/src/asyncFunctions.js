import { doc, setDoc,updateDoc ,collection,addDoc,getDoc,getDocs,deleteDoc} from "firebase/firestore"; 
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
          const docRef=await addDoc(collection(db,"Data",uid,type),{
            label:label,
            value:value
        })
        }else{
          const docRef=await setDoc(doc(db,"Data",uid,type,docId),{
            label:label,
            value:value
        })
        }
      } catch (e) {
        console.error("Error adding document: ", e);
      }

}

export const deleteData=async (uid,type,docId)=>{
  try {
    const docPath = `Data/${uid}/${type}/${docId}`;
    const res = await deleteDoc(doc(db, docPath));
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
