import React, { FC } from 'react'
import { Layout, PageBlock } from 'vtex.styleguide'


const myLeads: FC = () => {
  return (
    <Layout>
      <PageBlock
      title="Minhas Leads:"
      subtitle="Estas são as leads cadastratas até o momento:"
      variation="full">
        <h1>Hello, World!</h1>
      </PageBlock>
    </Layout>
  )
}

export default myLeads