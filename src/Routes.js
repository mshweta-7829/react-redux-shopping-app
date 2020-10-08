import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ItemDetails from './ItemDetails'
import ItemsList from './ItemsList'
import Cart from './Cart'

function Routes() {
  return (
    <div className="Routes">
      <Switch>
        <Route exact path="/">
          <ItemsList />
        </Route>

        <Route exact path="/cart">
          <Cart />
        </Route>

        <Route exact path="/products/:id">
          <ItemDetails />
        </Route>

      </Switch>
    </div>
  )
}

export default Routes