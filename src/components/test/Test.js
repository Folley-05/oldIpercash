import React from 'react'

import "./test.css"
import Comp from './Comp'

function Test() {
  return (
      <nav class="nav" role="navigation">
        <ul class="nav__list">
          <li>
            <input id="group-1" type="checkbox" hidden />
            <label for="group-1"><span class="fa fa-angle-right"> > </span> First level</label>
            <ul class="group-list">
              <li><a href="#">1st level item</a></li>
              <li>
                <input id="sub-group-1" type="checkbox" hidden />
                <label for="sub-group-1"><span class="fa fa-angle-right"> > </span> Second level</label>
                <ul class="sub-group-list">
                  <li><a href="#">2nd level nav item</a></li>
                  <li><a href="#">2nd level nav item</a></li>
                  <li><a href="#">2nd level nav item</a></li>
                  <li>
                    <input id="sub-sub-group-1" type="checkbox" hidden />
                    <label for="sub-sub-group-1"><span class="fa fa-angle-right"> > </span> Third level</label>
                    <ul class="sub-sub-group-list">
                      <li><a href="#">3rd level nav item</a></li>
                      <li><a href="#">3rd level nav item</a></li>
                      <li><a href="#">3rd level nav item</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
  )
}

export default Test
