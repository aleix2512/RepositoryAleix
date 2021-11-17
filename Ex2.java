import java.util.Scanner;

public class Ex2 {
    public static void main(String[] args) {
        Scanner teclat = new Scanner (System.in);
        System.out.println("Introdueix un nombre");
        System.out.println("Esteban Arquillo");
        int cont = teclat.nextInt();
        int fact = 1;
        int i = 1;
        while(i<=cont)  
        {
            fact = fact * i;
            i++;
        }
        System.out.println("El factorial de " + cont + " és " + fact );
    }
}    

 

