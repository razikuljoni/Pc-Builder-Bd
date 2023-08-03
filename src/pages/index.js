import Contact from '@/components/Contact/Contact'
import Herosection from '@/components/Herosection/Herosection'
import ProductDetails from '@/components/ProductDetails/ProductDetails'
import ProductCard from '@/components/Products/ProductCard'
import ProductsCategoryCard from '@/components/Products/ProductsCategoryCard'
import Title from '@/components/Title/Title'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Home = ({ data }) => {
  // const [featuredProducts, setFeaturedProducts] = useState([])
  const processor = data?.processors[0]
  const motherboard = data?.motherboards[0]
  const ram = data?.rams[0]
  const powerSupplie = data?.powerSupplies[0]
  const monitor = data?.monitors[0]
  const storageDevices = data?.storageDevices[0]
  const accessories = data?.accessories[0]

  const featuredProducts = [processor, motherboard, ram, powerSupplie, monitor, storageDevices]
  const featuredCategorys = [processor, motherboard, ram, powerSupplie, monitor, accessories]

  return (
    <main
      className={`${inter.className}`}
    >
      <Herosection />
      <Title title="Featured Products" subTitle="See Our Featured Products" />
      <ProductCard products={featuredProducts} />
      <Title title="Featured Categories" subTitle="Our Featured products categories" />
      <ProductsCategoryCard featuredCategorys={featuredCategorys} />
      {/* <ProductDetails /> */}
      <Title title="Contact Us" subTitle="Contact with Us. Or come to our office." />
      <Contact />
    </main>
  )
}

export default Home

// export const getStaticPaths = async () => {


//   return {
//     paths: [],
//     fallback: false
//   }
// }

export const getStaticProps = async (ctx) => {

  const res = await fetch('http://localhost:3000/api/products')
  const data = await res.json()

  return {
    props: {
      data: data?.data
    }
  }
}

