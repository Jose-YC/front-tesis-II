import { LinkMenuRecursive } from "./LinkMenuRecursive"
import { LinkSidebar } from "./LinkSidebar"
import { SubLinkSidebar } from "./SubLinkSidebar"


export const LinkItemAndSub = ({item}) => {

    if(item.children){
        return(
          <SubLinkSidebar menu = {item}>
           { <LinkMenuRecursive itemMenu = {item.children}/>}
          </SubLinkSidebar>
        )
      }
    
      if (item.type) {
        return (
          <LinkSidebar menu={item}/>
        )
      }
}
