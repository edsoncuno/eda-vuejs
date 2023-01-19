/**
 * 
public class NTree {
    
    private int valorN(NodeN raiz){
        return (int)raiz.getE();
    }
 
    ////////////////////////////////////////////////////////////////////////////
    
    public void llenarN(NodeN raiz){
        ES.escribe("hijo de"+raiz+": ");
        int h=ES.leeInt();
        if(h<0){return;}
        raiz.setHij(new NodeN(new Integer(h)));
        llenarN(raiz.getHij());
        llenarHermanos(raiz.getHij());
    }
    
    private void llenarHermanos(NodeN x){
        ES.escribe("hermano de"+x+": ");
        int h = ES.leeInt();
        if(h<0){return;}
        x.setHer(new NodeN(new Integer(h)));
        llenarN(x.getHer());
        llenarHermanos(x.getHer());   
    }
    
    ////////////////////////////////////////////////////////////////////////////
    
    public void mostrarN(NodeN raiz){
        if(raiz==null){return;}
        ES.escribe(valorN(raiz)+" ");
        mostrarN(raiz.getHij());
        mostrarN(raiz.getHij());
    }
    
    ////////////////////////////////////////////////////////////////////////////
    
    public int promedioN(NodeN raiz){
        int[] ret = new int[]{0, 0};
        promedioNAux(raiz, ret);
        return ret[0]/ret[1];
    }
    
    private void promedioNAux(NodeN raiz, int[] ret){
        if(raiz==null){return;}
        ret[0]+=valorN(raiz);
        ret[1]++;
        promedioNAux(raiz.getHij(), ret);
        promedioNAux(raiz.getHer(), ret);
    }
    
    ////////////////////////////////////////////////////////////////////////////
    
    public int promedioHojasN(NodeN raiz){
        int ret[] = new int[]{0, 0};
        promedioHojasNAux(raiz, ret);
        return ret[0]/ret[1];
    }
    
    private void promedioHojasNAux(NodeN raiz, int[] ret){
        if(raiz==null){return;}
        if(esHojaN(raiz)){
            ret[0]+=valorN(raiz);
            ret[1]++;
        }
        promedioHojasNAux(raiz.getHij(), ret);
        promedioHojasNAux(raiz.getHer(), ret);
    }
    
    ////////////////////////////////////////////////////////////////////////////
    
    private boolean esHojaN(NodeN raiz){
        return raiz.getHij() == null;
    }
    
    ////////////////////////////////////////////////////////////////////////////
    
    public int iesimaHojaN(NodeN raiz, int indice){
        int ret[] = new int[]{indice};
        return iesimaHojaNAux(raiz, ret);
    }
    
    private int iesimaHojaNAux(NodeN raiz, int[] ret){
        if(raiz==null){return -123;}
        if(esHojaN(raiz)){
            if(ret[0]==0){return valorN(raiz);}
            ret[0]--;
            return -456;
        }
        int x = iesimaHojaNAux(raiz.getHij(), ret);
        return x>=0 ? x : iesimaHojaNAux(raiz.getHer(), ret);
    }
    
    ////////////////////////////////////////////////////////////////////////////
    
    public int promedioTrayectoriaN(NodeN raiz, int indice){
        int ret[] = new int[]{indice, 0, 0};
        promedioTrayectoriaNAux(raiz, ret);
        return ret[2]<0?-123:(ret[1]/ret[2]);
    }
    
    private void promedioTrayectoriaNAux(NodeN raiz, int[] ret){
        if(raiz==null){return;}
        if(esHojaN(raiz)){
            if(ret[0]==0){
                ret[1]+=valorN(raiz);
                ret[2]++;
                return;
            }
            ret[0]--;
            return;
        }
        promedioTrayectoriaNAux(raiz.getHij(), ret);
        if(ret[2]>0){
            ret[1]+=valorN(raiz);
            ret[2]++;
            return;
        }
        promedioTrayectoriaNAux(raiz.getHer(), ret);
        if(ret[2]>0){
            ret[1]+=valorN(raiz);
            ret[2]++;
            return;
        }
    }
    
    ////////////////////////////////////////////////////////////////////////////
    
    public int promedioNivelN(NodeN raiz, int nivel){
        int ret[] = new int[]{nivel, 0, 0};
        promedioNivelNAux(raiz, ret);
        return ret[2]==0?-123:(ret[1]/ret[2]);
    }
    
    private void promedioNivelNAux(NodeN raiz, int[] ret){
        if(raiz==null){return;}
        if(ret[0]==0){
            ret[1]+=valorN(raiz);
            ret[2]++;
            promedioNivelNAux(raiz.getHer(), ret);
            return;
        }
        ret[0]--;
        promedioNivelNAux(raiz.getHij(), ret);
        ret[0]++;
        promedioNivelNAux(raiz.getHer(), ret);
    }
    
    ////////////////////////////////////////////////////////////////////////////
    
    public void espejoN(NodeN raiz){
        if(raiz==null){return;}
        raiz.setHij(invertirN(raiz.getHij()));
        espejoN(raiz.getHij());
        espejoN(raiz.getHer());
    }
    
    private NodeN invertirN(NodeN act){
        NodeN ant = null;
        NodeN sig = null;
        while(act != null){
            sig = act.getHer();
            act.setHer(ant);
            ant = act;
            act = sig;
        }
        return act;
    }
    
    ////////////////////////////////////////////////////////////////////////////
}


public class NodeN {

    private Object e;
    private NodeN hij, her;

    public NodeN(Object e) {
        setE(e);
    }

    public void setE(Object e) {
        this.e = e;
    }

    public Object getE() {
        return e;
    }

    public void setHij(NodeN hij) {
        this.hij = hij;
    }

    public NodeN getHij() {
        return hij;
    }

    public void setHer(NodeN her) {
        this.her = her;
    }

    public NodeN getHer() {
        return her;
    }

    public String toString() {
        return e + "";
    }
}


 */