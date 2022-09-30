import { useEffect, useState } from 'react';
import './App.css';

function App() {

  // 占位内容
  const [menu] = useState([
    { title: "1", id: 1 },
    { title: "2", id: 2 },
    { title: "3", id: 3 },
    { title: "4", id: 4 },
    { title: "5", id: 5 },
    { title: "6", id: 6 },
    { title: "7", id: 7 },
  ])

  const [boxContent, setBoxContent] = useState([
    { title: "1", id: 1 },
    { title: "2", id: 2 },
    { title: "3", id: 3 },
    { title: "4", id: 4 },
    { title: "5", id: 5 },
    { title: "6", id: 6 },
    { title: "7", id: 7 }
  ])

  // 点击滚动跳转到指定位置
  const handClick = (item) => {
    const lis = document.getElementById(item)
    const lisOffsetTop = lis.offsetTop
    window.scrollTo(0, lisOffsetTop)
  }

  // 滚动到可视区域加载数据
  const scrollListener = () => {
    const scrollTop = document.getElementById('ul').offsetHeight
    const scrollsHeight = document.body.scrollTop || document.documentElement.scrollTop
    const innerHeight = window.innerHeight
    let arr = []
    if (scrollTop - (scrollsHeight + innerHeight) < 100) {
      for (let i = 0; i < 7; i++) {
        arr.push({
          title: i,
          id: i + 8
        })
      }
      setBoxContent([...boxContent, ...arr])
    }
  }

  // 加载显示内容部分的数据

  useEffect(() => {
    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  })

  return (
    <div className="app" >
      <ul id="ul">
        {
          boxContent.map(i => (
            <li key={i.id} id={i.id}>{i.title}</li>
          ))
        }
      </ul>
      <div className='box'>
        {menu.map((item) => {
          return <span key={item.id} onClick={() => handClick(item.id)} >{item.title}</span>
          })
        }
      </div>
    </div>
  );
}

export default App;
