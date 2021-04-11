import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <div >

      hello ,this is my home page. my name is wang jiahui . <br></br>
I  like reading books. Through reading,<br></br>
I  have abtained a lot of knowlege as well as a feel of self-satisfaction. <br></br>
In addition, doing sports is my hobby.
      </div>
    </>
  )
}
