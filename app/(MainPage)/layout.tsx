import { ClerkProvider} from '@clerk/nextjs'
import Navbar from './(dashboard)/_components/dashboard-navbar'
import Sidebar from './(dashboard)/_components/sidebar'
import { Separator } from '@/components/ui/separator'
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
})
{
	return (
		<ClerkProvider>
			<html lang="en">
				<body>
					<Navbar />
					<main className="pt-20 md:pt-12 px-2 max-w-8xl 2xl:max-w-screen-xl ml-6">
						<div className="flex gap-x-4">
							<div className="w-64 shrink-0 hidden md:block h-full">
								<Sidebar />
							</div>
							<Separator orientation="vertical" className="h-auto self-stretch" />
							<div className="flex-1">
								{children}
							</div>
						</div>
					</main>
				</body>
			</html>
		</ClerkProvider>
	)
}