import JoinNowBTN from './SubComponent/JoinNowBTN';
import ProfileBTN from './SubComponent/ProfileBTN';
import NavBar from './SubComponent/NavBar';
import Logo from './SubComponent/Logo';

const MainNavbarComponent = () => {
    return (
        <div className='width-screen h-[90px]  flex justify-center text-gray-700'>
            <div className='max-w-[1150px]  lg:px-14  w-full flex items-center justify-between font-poppins text-[13px] lg:text-[16px] '>
                <div className='flex items-center'>
                    <Logo />
                </div>

                <div className='flex items-center gap-4 '>
                    <NavBar />
                    <ProfileBTN />
                    <JoinNowBTN />
                </div>
            </div>
        </div>
    )
}

export default MainNavbarComponent