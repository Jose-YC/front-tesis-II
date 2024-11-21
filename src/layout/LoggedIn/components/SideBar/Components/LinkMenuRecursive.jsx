import { LinkItemAndSub } from "./LinkItemAndSub";


export const LinkMenuRecursive = ({itemMenu = []}) => {
  return(
          <>
            {
                  itemMenu.map((item, index) => (
                    <LinkItemAndSub item={item} key={index}/>
                  ))
                  }
          </>

  )
  
}
