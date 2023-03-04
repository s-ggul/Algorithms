import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
	static int count0 = 0, count1 = 0;
	static int[][] board;
    public static void main(String[] args) throws IOException {
    	BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    	StringTokenizer st = new StringTokenizer(br.readLine());
    	
    	int n = Integer.parseInt(st.nextToken());
    	
    	board = new int[n][n];
    	
    	for(int i = 0; i < n; i++) {
    		st = new StringTokenizer(br.readLine());
    		for(int j = 0; j < n; j++) {
    			board[i][j] = Integer.parseInt(st.nextToken());
    		}
    	}
    	
    	divideAndCount(0,0,n);
    	
    	System.out.println(count0);
    	System.out.println(count1);
    }
    
    private static void divideAndCount(int x, int y, int l) {
    	int start = board[x][y];
    	boolean flag = false;
    	for(int i = x; i < x + l; i++) {
    		for(int j = y; j < y + l; j++) {
    			if(board[i][j] != start) flag = true;
    		}
    	}
    	
    	if(flag) {
    		int d = l/2;
    		divideAndCount(x,y,d);
    		divideAndCount(x,y+d,d);
    		divideAndCount(x+d,y,d);
    		divideAndCount(x+d,y+d,d);
    	}else {
    		if(start == 0) count0++;
    		else count1++;
    	}
    	
    }
}