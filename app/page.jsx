
import Feed from '@components/Feed'
const Home = () => {
  console.log('amas')
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share AI Prompts
        <br className="max-md:hidden"/>
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="text-center desc">
        promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts.
      </p>
      <Feed />
    </section>
  )
}

export default Home
