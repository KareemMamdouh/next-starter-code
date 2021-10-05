import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect } from 'react'
import styles from 'assets/styles/Home.module.css'
import { testAction } from 'redux/store/actions'
import { connect } from 'react-redux'
import { Button } from 'rsuite'

function Home(props) {
  useEffect(() => {
    console.log(props)
  }, [])

  return (
    <div className={styles.container}>
      <button
        type="button"
        onClick={props.testAction}
        className="tw-bg-green-500   tw-px-2  tw-flex tw-items-center tw-justify-center tw-rounded-md  tw-text-white">
        test tailwains css if it work will render green Button
      </button>
      <br />
      <Button appearance="primary">test r-suite if it work will render primary Button</Button>
    </div>
  )
}
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = { testAction }
export default connect(mapStateToProps, mapDispatchToProps)(Home)
