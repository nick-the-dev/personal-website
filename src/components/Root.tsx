import './root.scss'
import ChildrenProp from 'models/ChildrenProp'
import Header from './Header'

export default function ({ children }: ChildrenProp) {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
      {/* <Footer /> */}
    </>
  )
}
