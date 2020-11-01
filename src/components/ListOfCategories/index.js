import React, { Fragment, useCallback } from 'react'
import { Category } from '../Category'
import { CategorySkeleton } from '../Category/skeleton'
import { Item, List } from './styles'

import { useCategories } from '../../hooks'

export function ListOfCategories () {
  const { categories, loading } = useCategories()
  const renderList = useCallback(() => <List>
  {
    loading
      ? [1,2,3,4,5,6].map(_ => <CategorySkeleton key={_}/>)
      : categories.map(category => <Item key={category.id}><Category {...category}/></Item>
    )
  }
</List>)
  return (
    <Fragment>
      {renderList()}
    </Fragment>
  )
}