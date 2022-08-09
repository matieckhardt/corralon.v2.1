
interface Retirado {
  cantidadFaltante: number,
  cantidadRetirada: number,
  mercaderia: string,
}

export const ListRetiros = (props:{retirado:Retirado[]}) => {


  const {retirado} = props

    return (
   <div>
     <table style={{width:'100%', borderBottom:'1px solid gray'}}>
     <tbody>
     {retirado.map( (item: any, index) => {
        console.log("retirado++", retirado)
        return(
        
          <tr key={index}>
         
            {item.fechaRetiro && <td style={{ width:'25%', textAlign:"center"}} colSpan={1} rowSpan={retirado.length}>{item.fechaRetiro ? item.fechaRetiro : ''}</td>}
            <td style={{width:'30%'}}>{item.mercaderia}</td>
            <td style={{width:'10%'}}>{item.cantidadFaltante}</td>
            <td style={{width:'10%'}}>{item.cantidadRetirada}</td>
          </tr>
         
        )
      })}
       </tbody>
     </table>
    </div>
      );
};