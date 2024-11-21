import { Header, SideBar } from "../"
import { NotificationSystem } from "../../../Models/NotificationItem/NotificationSystem"

export const LayoutPage = ({children}) => {
  return (
    <>
        <div className="min-h-screen grid grid-cols-1 xl:grid-cols-6">
          <SideBar/>
          <div className="xl:col-span-5 dark:bg-dark-secondary-900 dark:text-white">
            <Header/>
              {children}
          </div>
        </div>
    </>
  )
}
