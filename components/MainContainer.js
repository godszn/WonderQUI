import React, { Component } from 'react'
import './Styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import newbtn from '../icons/add.png'; 

export class MainContainer extends Component {
  render() {
    return (
      <div className = 'Main-content container-fluid'>
        <div className = 'Navigation-widget navbar'>
            <div className = 'Nav-contents'>
                <div className = 'navbrand-container'>
                    <div className = 'd-flex p-2 navbrand'>
                        <h6>
                            Lorem-ipsum
                        </h6>
                    </div>
                </div>
                <div className = 'right-nav-widget'>
                    <div className = 'dummy-img'>
                      0
                    </div>
                </div>
            </div>
        </div>
        <div className = 'chat-widget d-flex p-1 m-3'>
            <div className = 'd-flex justify-contents-start sidebar p-4 '>
                <div className = 'btn d-flex p-2'>
                    <a className = 'active p-2' href = '#Lorem-ipsum'>
                        Lorem-ipsum
                    </a>
                </div>
                <div className = 'd-flex p-2 btn'>
                    <a href = '#Lorem-ipsum'>
                        Lorem-ipsum
                    </a>
                </div>
                <div className = 'd-flex p-2 btn'>
                    <a href = '#Lorem-ipsum'>
                        Lorem-ipsum
                    </a>
                </div>
                <div className = 'd-flex p-2 btn'>
                    <a href = '#Lorem-ipsum'>
                        Lorem-ipsum
                    </a>
                </div>
                <div className = 'new-widget btn d-flex'>
                    <img src = {newbtn} className = 'add'/>
                    <a>
                      New
                    </a>
                </div>
            </div>
            <div className = 'detail-widget d-flex p-4'>
              <p className = 'd-flex p-3'>
                 <ul className = 'chat-list d-flex p-4 '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor,
                    urna vel maximus consectetur, arcu quam egestas erat, pulvinar blandit lectus nulla eget risus.
                    Aliquam laoreet, nibh at pulvinar tincidunt, velit sapien malesuada ex, non feugiat ante ante ut elit.
                    Fusce eu orci ut eros laoreet viverra et vitae elit. Suspendisse potenti. Etiam pretium vel tellus quis rhoncus. Vivamus in lacus vitae arcu pharetra sollicitudin vitae at dui. Fusce iaculis, nulla eu dignissim iaculis, odio sapien imperdiet ante, at pretium quam lacus ac mauris. Integer suscipit felis eu tincidunt feugiat. Proin sed ante id magna feugiat condimentum. Ut aliquam lorem nisi, id semper turpis rutrum sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris vel volutpat nisi.
                    Aenean sed lectus urna. Integer sed ex magna. Integer egestas lectus ut sem finibus consequat. Duis sodales neque vel pellentesque sodales. Fusce condimentum ex eu urna dapibus, sed dapibus nunc condimentum.
                </ul>
              </p>
            </div>
            <div className = 'chatbox-widget d-flex p-4'>
                <p className = 'd-flex chat-text p-4'>
                <ul className = 'chat-list d-flex p-4 '>
                    <h5>
                        Lorem ipsum dolor sit amet
                    </h5>
                    <a>consectetur adipiscing elit. Ut porttitor,
                    urna vel maximus consectetur, arcu quam egestas erat, pulvinar blandit lectus nulla eget risus.
                    Aliquam laoreet,</a> <h5>
                        nibh at pulvinar tincidunt, velit sapien malesuada ex, non feugiat ante ante ut elit.
                    Fusce eu orci ut eros laoreet</h5> <a>viverra et vitae elit. Suspendisse potenti. Etiam pretium vel tellus quis rhoncus.</a><h5> Vivamus in lacus vitae arcu pharetra sollicitudin vitae at dui. Fusce iaculis, nulla eu dignissim iaculis,</h5> <a> odio sapien imperdiet ante, at pretium quam lacus ac mauris. Integer suscipit felis eu tincidunt feugiat. Proin sed ante id magna feugiat condimentum. Ut aliquam lorem nisi, id semper turpis rutrum sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris vel volutpat nisi.
                    Aenean sed lectus urna. Integer sed ex magna.</a>
                </ul>
                </p>
                <div className = 'generate-wrapper container-fluid d-flex p-4'>
                    <div className = 'btn generate'>
                    <a>Generate questions</a>
                    </div>
                    <div className = 'btn Answer d-flex'>
                    <a>View Answer</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default MainContainer
