import { separarNumerosConDecimales } from "@/common/helper/separarNumerosConDecimales"
import { useCalcularDescuento } from "@/hooks/useCalcularDescuento"
import { useSumaTotalDeProductos } from "@/hooks/useSumaTotalDeProductos"

const TotalAVender = () => {

    const sumaDeProductos = useSumaTotalDeProductos()
    const descuento = useCalcularDescuento()
    return separarNumerosConDecimales(sumaDeProductos - descuento)
}

export default TotalAVender