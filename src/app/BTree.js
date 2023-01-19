export const BTree = {

}
/**
 * 
 * 
public class BTree {

    private static int valorB(NodeB raiz) {
        return (int) raiz.getE();
    }

    public void llenarB(NodeB raiz) {
        int h;
        ES.escribe("Hijo izquierdo de " + raiz.getE() + ": ");
        if ((h = ES.leeInt()) > 0) {
            raiz.setI(new NodeB(new Integer(h)));
            llenarB(raiz.getI());
        }
        ES.escribe("Hijo derecho de " + raiz.getE() + ": ");
        if ((h = ES.leeInt()) > 0) {
            raiz.setD(new NodeB(new Integer(h)));
            llenarB(raiz.getD());
        }
    }

    public void mostrarPreordenB(NodeB raiz) {
        if (raiz == null) {
            return;
        }
        ES.escribe("\n" + valorB(raiz));
        mostrarPreordenB(raiz.getI());
        mostrarPreordenB(raiz.getD());
    }

    public int mayorNodeB(NodeB raiz) {
        int ret[] = new int[]{0};
        mayorNodeBAux(raiz, ret);
        return ret[0];
    }

    private void mayorNodeBAux(NodeB raiz, int[] ret) {
        if (raiz == null) {
            return;
        }
        if(valorB(raiz)>ret[0]){
            ret[0]=valorB(raiz);
        }
        mayorNodeBAux(raiz.getI(), ret);
        mayorNodeBAux(raiz.getD(), ret);
    }

    public void mostrarInordenB(NodeB raiz) {
        if (raiz == null) {
            return;
        }
        mostrarInordenB(raiz.getI());
        ES.escribe("\n" + valorB(raiz));
        mostrarInordenB(raiz.getD());
    }

    public void mostrarPostordenB(NodeB raiz) {
        if (raiz == null) {
            return;
        }
        mostrarPostordenB(raiz.getI());
        mostrarPostordenB(raiz.getD());
        ES.escribe("\n" + valorB(raiz));
    }

    public int promedioB(NodeB raiz) {
        int ret[] = new int[]{0, 0};
        promedioBAux(raiz, ret);
        return ret[0] / ret[1];
    }

    private void promedioBAux(NodeB raiz, int[] ret) {
        if (raiz == null) {
            return;
        }
        ret[0] += valorB(raiz);
        ret[1]++;
        promedioBAux(raiz.getI(), ret);
        promedioBAux(raiz.getD(), ret);
    }

    private static boolean esHojaB(NodeB b) {
        return b.getI() == null && b.getD() == null;
    }

    public int promedioHojasB(NodeB raiz) {
        int ret[] = new int[]{0, 0};
        promedioHojasBAux(raiz, ret);
        return ret[0] / ret[1];
    }

    private void promedioHojasBAux(NodeB raiz, int[] ret) {
        if (raiz == null) {
            return;
        };
        if (esHojaB(raiz)) {
            ret[0] += valorB(raiz);
            ret[1]++;
            return;
        }
        promedioHojasBAux(raiz.getI(), ret);
        promedioHojasBAux(raiz.getD(), ret);
    }

    public int iesimaHojaB(NodeB raiz, int indice) {
        int ret[] = new int[]{indice};
        return iesimaHojaBAux(raiz, ret);
    }

    private int iesimaHojaBAux(NodeB raiz, int[] ret) {
        if (raiz == null) {
            return -123;
        }
        if (esHojaB(raiz)) {
            if (ret[0] == 0) {
                return valorB(raiz);
            }
            ret[0]--;
            return -456;
        }
        int x = iesimaHojaBAux(raiz.getI(), ret);
        if (x > 0) {
            return x;
        }
        return iesimaHojaBAux(raiz.getD(), ret);
    }

    public int promedioTrayectoriaB(NodeB raiz, int indice) {
        int ret[] = new int[]{indice, 0, 0};
        promedioTrayectoriaBAux(raiz, ret);
        return ret[2] == 0 ? -123 : (ret[1] / ret[2]);
    }

    private void promedioTrayectoriaBAux(NodeB raiz, int[] ret) {
        if (raiz == null) {
            return;
        }
        if (esHojaB(raiz)) {
            if (ret[0] == 0) {
                ret[1] += valorB(raiz);
                ret[2]++;
                return;
            }
            ret[0]--;
            return;
        }
        promedioTrayectoriaBAux(raiz.getI(), ret);
        if (ret[2] > 0) {
            ret[1] += valorB(raiz);
            ret[2]++;
            return;
        }
        promedioTrayectoriaBAux(raiz.getD(), ret);
        if (ret[2] > 0) {
            ret[1] += valorB(raiz);
            ret[2]++;
            return;
        }
    }

    ////////////////////////////////////////////////////////////////////////////
    public int promedioNivelB(NodeB raiz, int nivel) {
        int ret[] = new int[]{nivel, 0, 0};
        promedioNivelBAux(raiz, ret);
        return ret[2] == 0 ? -789 : (ret[1] / ret[2]);
    }

    private void promedioNivelBAux(NodeB raiz, int[] ret) {
        if (raiz == null) {
            return;
        }
        if (ret[0] == 0) {
            ret[1] += valorB(raiz);
            ret[2]++;
            return;
        }
        ret[0]--;
        promedioNivelBAux(raiz.getI(), ret);
        promedioNivelBAux(raiz.getD(), ret);
        ret[0]++;
    }

    ////////////////////////////////////////////////////////////////////////////
    public void espejoB(NodeB raiz) {
        if (raiz == null) {
            return;
        }
        NodeB temp = raiz.getI();
        raiz.setI(raiz.getD());
        raiz.setD(temp);
        espejoB(raiz.getI());
        espejoB(raiz.getD());
    }
}



public class NodeB {

    private Object e;
    private NodeB i, d;

    public NodeB(Object e) {
        setE(e);
    }

    public void setE(Object e) {
        this.e = e;
    }

    public Object getE() {
        return e;
    }

    public void setI(NodeB i) {
        this.i = i;
    }

    public NodeB getI() {
        return i;
    }

    public void setD(NodeB d) {
        this.d = d;
    }

    public NodeB getD() {
        return d;
    }

    public String toSting() {
        return String.valueOf(e);
    }
}



 * 
 */