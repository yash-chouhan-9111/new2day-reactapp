import React, { useState } from "react"


const AppContext = React.createContext({
  showSidebar: true,
  setShowSidebar: ()=>{},
  newsData: [],
  setNewsData: ()=>{},
  isEdit: '',
  setIsEdit: ()=>{},
  toggleSubmit: false, 
  setToggleSubmit:()=>{}, 
  editNews: ()=>{},
})

export const AppProvider =({children})=>{
  const [newsData, setNewsData] = useState([])
  const [showSidebar, setShowSidebar] = useState(true)
  const [toggleSubmit, setToggleSubmit] = useState(false)
  const [ isEdit, setIsEdit] = useState(false)

  const editNews = ( index) => {
    let newEditItem = newsData.find((elem)=>{
      return newsData.indexOf(elem) === index
    })
    document.getElementById('title').value=newEditItem.title;
    document.getElementById('content').value=newEditItem.content;
    document.getElementById('category').value=newEditItem.category;
    document.getElementById('status').value=newEditItem.states;
    setIsEdit(index);
  };

  return(
    <AppContext.Provider value={{showSidebar, setShowSidebar, newsData, setNewsData, isEdit,setIsEdit, toggleSubmit, setToggleSubmit, editNews}}>
      {children}
    </AppContext.Provider>
  )
} 

export const useAppContext = () => React.useContext(AppContext)