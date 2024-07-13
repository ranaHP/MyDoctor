import HeroSection from '../../Component/HeroSection'
import MainNavbarComponent from '../../Component/MainNavbar'
import TopBarComponent from '../../Component/TopBar'

const HomePage = () => {
  return (
    <div className=''>
        <TopBarComponent/>
        <MainNavbarComponent/>
        <HeroSection/>
    </div>
  )
}

export default HomePage