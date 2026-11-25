import { useEffect, useState } from 'react'
import './App.css'
const API_URL = 'http://localhost:8080/api/practice-records'

function App() {
  const [records, setRecords] = useState([])
  const [practiceDate, setPracticeDate] = useState(
    new Date().toISOString().slice(0, 10)
  )
  const [durationMinutes, setDurationMinutes] = useState('')
  const [content, setContent] = useState('')
  const [memo, setMemo] = useState('')

  // 練習記録を取得
  const fetchRecords = async () => {
    const response = await fetch(API_URL)
    const data = await response.json()
    setRecords(data)
  }

  // 初回表示時に記録を取得
  useEffect(() => {
    fetchRecords()
  }, [])

  // 練習記録を登録
  const handleSubmit = async (e) => {
    e.preventDefault()

    const newRecord = {
      practiceDate,
      durationMinutes: Number(durationMinutes),
      content,
      memo,
    }

    await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRecord),
    })

    setDurationMinutes('')
    setContent('')
    setMemo('')
    fetchRecords()
  }

  // 練習記録を削除
  const handleDelete = async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    })

    fetchRecords()
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-text">
  <h1>🎸 Music Log</h1>
  <p>ただいまレベルアップ中</p>
</div>
    　</header>

      <main>
        <section className="form-section">
          <h2>練習記録を登録</h2>

          <form onSubmit={handleSubmit}>
            <label>練習日</label>
            <input
              type="date"
              value={practiceDate}
              onChange={(e) => setPracticeDate(e.target.value)}
              required
            />

            <label>練習時間（分）</label>
            <input
              type="number"
              value={durationMinutes}
              onChange={(e) => setDurationMinutes(e.target.value)}
              placeholder="例：60"
              min="1"
              required
            />

            <label>練習内容</label>
            <input
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="例：ギターのコード練習"
              required
            />

            <label>メモ</label>
            <textarea
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
              placeholder="今日の練習について..."
            />

            <button type="submit">記録を登録する</button>
          </form>
        </section>

        <section className="records-section">
          <h2>練習記録一覧</h2>

          {records.length === 0 ? (
            <p className="empty">まだ練習記録がありません。</p>
          ) : (
            records.map((record) => (
              <div className="record-card" key={record.id}>
                <h3>{record.practiceDate}</h3>
                <p>⏱ {record.durationMinutes}分</p>
                <p>🎵 {record.content}</p>
                <p>{record.memo}</p>

                <button
                  className="delete-button"
                  onClick={() => handleDelete(record.id)}
                >
                  削除
                </button>
              </div>
            ))
          )}
        </section>
      </main>
    </div>
  )
}

export default App