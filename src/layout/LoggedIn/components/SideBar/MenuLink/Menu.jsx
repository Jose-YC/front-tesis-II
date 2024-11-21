import { itemMenu } from "./LinkMenu";
import { LinkMenuRecursive } from "../Components/LinkMenuRecursive";

export const Menu = () => {

  return (
        <nav>
           <ul>
              <LinkMenuRecursive itemMenu={itemMenu}/>
           </ul>
        </nav>
  )
}
