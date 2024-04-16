import { useState } from 'react'
import './App.css'
import Modal from './Modal'

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  
  const openModal = () => {
    console.log("모달이 켜짐")
    setModalOpen(!modalOpen);
  }
  const closeModal = () => {
    console.log("모달이 꺼짐")
    setModalOpen(!modalOpen)
  }
  return (
    <>
    <div>
      <h1>안녕하세요!</h1>
      <p>내용내용내용</p>
      <button onClick={openModal}>버튼열기</button>
      {modalOpen && <Modal closeModal={closeModal}></Modal>}
    </div>
    </>
  )
}

export default App
