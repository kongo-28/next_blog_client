import React from 'react'
import styles from "@/styles/Home.module.css"

const CreatePost = () => {
  return (

    <div className={styles.container}>
      <h1>bブログ新規登録</h1>
      <form>
        <label>タイトル</label>
        <input type="text" />
        <label>本文</label>
        <textarea></textarea>
        <button type="submit"></button>

      </form>
    </div>
  )
}

export default CreatePost