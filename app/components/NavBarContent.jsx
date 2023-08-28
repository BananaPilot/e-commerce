import React from 'react'
import Link from 'next/link'
import { routes } from '@/routes'

function NavBarContent({props}) {
	return (
		<>
			{
				props === "products" ? (
					<div className='flex flex-row justify-evenly'>
						<ul className='m-2 text-lg font-medium'>
							Shop icons:
							<li className='mt-2 text-base font-normal flex flex-col gap-y-2'>
								<Link className='hover:border-b border-gray-400' href={`${routes.all}/AirForce`}>Air Force</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.all}/Jordan`}>Jordan</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.all}/AirMax`}>Air Max</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.all}/Blazers`}>Blazers</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.all}/Pegasus`}>Pegasus</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.all}/LeBron`}>LeBron</Link>
							</li>
						</ul>
						<ul className='m-2 text-lg font-medium'>
							For man:
							<li className='mt-2 text-base font-normal flex flex-col gap-y-2'>
								<Link className='hover:border-b border-gray-400' href={`${routes.products}`}>Life style</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.products}`}>Back to Work</Link>
							</li>
						</ul>
						<ul className='m-2 text-lg font-medium'>
							For women:
							<li className='mt-2 text-base font-normal flex flex-col gap-y-2'>
								<Link className='hover:border-b border-gray-400' href={`${routes.products}`}>Life style</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.products}`}>Back to work</Link>
							</li>
						</ul>
						<ul className='m-2 text-lg font-medium'>
							Sports:
							<li className='mt-2 text-base font-normal flex flex-col gap-y-2'>
								<Link className='hover:border-b border-gray-400' href={`${routes.all}/Football`}>Football</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.all}/Basketball`}>Basketball</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.all}/Golf`}>Golf</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.all}/Tennis`}>Tennis</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.all}/Running`}>Running</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.all}/Volleyball`}>Volleyball</Link>
							</li>
						</ul>
					</div>
				) : (
					<></>
				)
			}
			{
				props === "men" ? (
					<div className='flex flex-row justify-evenly'>
						<ul className='m-2 text-lg font-medium'>
							Discover icons:
							<li className='mt-2 text-base font-normal flex flex-col gap-y-2'>
								<Link className='hover:border-b border-gray-400' href={`${routes.men}/AirForce`}>Air Force</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.men}/Jordan`}>Jordan</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.men}/AirMax`}>Air Max</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.men}/Blazers`}>Blazers</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.men}/Pegasus`}>Pegasus</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.men}/LeBron`}>LeBron</Link>
							</li>
						</ul>
						<ul className='m-2 text-lg font-medium'>
							Sports:
							<li className='mt-2 text-base font-normal flex flex-col gap-y-2'>
								<Link className='hover:border-b border-gray-400' href={`${routes.men}/Football`}>Football</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.men}/Basketball`}>Basketball</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.men}/Golf`}>Golf</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.men}/Tennis`}>Tennis</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.men}/Running`}>Running</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.men}/Volleyball`}>Volleyball</Link>
							</li>
						</ul>
					</div>
				) : (
					<></>
				)
			}
			{
				props === "women" ? (
					<div className='flex flex-row justify-evenly'>
						<ul className='m-2 text-lg font-medium'>
							Discover icons:
							<li className='mt-2 text-base font-normal flex flex-col gap-y-2'>
								<Link className='hover:border-b border-gray-400' href={`${routes.women}/AirForce`}>Air Force</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.women}/Jordan`}>Jordan</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.women}/AirMax`}>Air Max</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.women}/Blazers`}>Blazers</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.women}/Pegasus`}>Pegasus</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.women}/LeBron`}>LeBron</Link>
							</li>
						</ul>
						<ul className='m-2 text-lg font-medium'>
							Sports:
							<li className='mt-2 text-base font-normal flex flex-col gap-y-2'>
								<Link className='hover:border-b border-gray-400' href={`${routes.women}/Football`}>Football</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.women}/Basketball`}>Basketball</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.women}/Golf`}>Golf</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.women}/Tennis`}>Tennis</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.women}/Running`}>Running</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.women}/Volleyball`}>Volleyball</Link>
							</li>
						</ul>
					</div>
				) : (
					<></>
				)
			}
			{
				props === "sales" ? (
					<div className='flex flex-row justify-evenly'>
						<ul className='m-2 text-lg font-medium'>
							Icons sales:
							<li className='mt-2 text-base font-normal flex flex-col gap-y-2'>
								<Link className='hover:border-b border-gray-400' href={`${routes.products}/AirForce`}>Air Force</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.products}/Jordan`}>Jordan</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.products}/AirMax`}>Air Max</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.products}/Blazers`}>Blazers</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.products}/Pegasus`}>Pegasus</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.products}/LeBron`}>LeBron</Link>
							</li>
						</ul>
						<ul className='m-2 text-lg font-medium'>
							Sports sales:
							<li className='mt-2 text-base font-normal flex flex-col gap-y-2'>
								<Link className='hover:border-b border-gray-400' href={`${routes.products}/Football`}>Football</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.products}/Basketball`}>Basketball</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.products}/Golf`}>Golf</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.products}/Tennis`}>Tennis</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.products}/Running`}>Running</Link>
								<Link className='hover:border-b border-gray-400' href={`${routes.products}/Volleyball`}>Volleyball</Link>
							</li>
						</ul>
					</div>
				) : (
					<></>
				)
			}
		</>
	)
}

export default NavBarContent