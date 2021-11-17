import java.util.Scanner;

    public class Ex1 {

        public static void main (String[] args) { 
            Scanner teclat = new Scanner(System.in);
            System.out.println("Escriu un numero sencer o un 0");
            System.out.println("Esteban Arquillo");
            int numero = teclat.nextInt();
            while (numero!=0) {
                System.out.println("El resultat es " + numero*2);
                System.out.println("Escriu un altre numero sencer o un 0");
                numero = teclat.nextInt();
            }   
        }
    }
