import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'Chair.webp',
          desc: 'asdasdsaddas',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стол',
          img: 'stol-so-smoloj.jpg',
          desc: 'asdasdsaddas',
          category: 'tables',
          price: '149.99'
        },
        {
          id: 3,
          title: 'Диван',
          img: '7(1).jpg',
          desc: 'asdasdsaddas',
          category: 'sofa',
          price: '549.99'
        },
        {
          id: 4,
          title: 'Лампа',
          img: 'Abele-tablelamp-1.jpg',
          desc: 'asdasdsaddas',
          category: 'light',
          price: '25.99'
        },
        {
          id: 5,
          title: 'Стул белый',
          img: 'er.jpg',
          desc: 'asdasdsaddas',
          category: 'chairs',
          price: '55.99'
        },
        {
          id:6,
          title: 'Кровать',
          img: 'krovat.jpg',
          desc: 'asdasdsaddas',
          category: 'bed',
          price: '699.99'
        }
      ],
      showItem: false,
      fullItem: {}
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render(){
    return (
      <div className="wrapper">
        <Header order = {this.state.orders} onDelete = {this.deleteOrder}/>
        <Items onShowItem = {this.onShowItem} items = {this.state.items} onAdd = {this.addToOrder}/>
        {this.state.showItem && <ShowFullItem onShowItem = {this.onShowItem} onAdd = {this.addToOrder} item = {this.state.fullItem}/>}
        <Footer />
      </div>
    );
  }

  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({showItem: !this.state.showItem})
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(itemm){
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === itemm.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, itemm] })
  }

}

export default App;
