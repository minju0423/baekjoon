package JAVA;

import java.util.LinkedList;
import java.util.Queue;

public class Main_2178 {
    static int N = 4;
    static int M = 6;
    static int[][] arr = {{1,0,1,1,1,1},{1,0,1,0,1,0},{1,0,1,0,1,1},{1,1,1,0,1,1}};
    static int[][] dist = new int[N][M];
    public static void main(String[] args) {
        int[] dx = {1,0,-1,0};
        int[] dy = {0,-1,0,1};

        for(int i=0; i<N; i++){
            for(int j=0; j<M; j++){
                dist[i][j] = -1;
            }
        }
        Queue<int[]> queue = new LinkedList<>();
        queue.offer(new int[]{0,0});
        dist[0][0] = 0;

        while (!queue.isEmpty()) {
            int[] p = queue.poll();
            int cx = p[0];
            int cy = p[1];
            for(int i=0; i<4; i++){
                int nx = cx + dx[i];
                int ny = cy + dy[i];

                if(nx<0 || nx>= N || ny<0 || ny>=M){
                    continue;
                }

                if(arr[nx][ny] == 1 && dist[nx][ny] == -1){
                    queue.offer(new int[]{nx, ny});
                    dist[nx][ny] = dist[cx][cy] +1;
                }
            }


        }
        System.out.println(dist[N-1][M-1]+1);
       
    }

    

    // public static class Point {
    //     int x,y;
    //     public Point(int x, int y){
    //         this.x = x;
    //         this.y = y;
    //     }
    //     public int getX() {
    //         return x;
    //     }
    //     public void setX(int x) {
    //         this.x = x;
    //     }
    //     public int getY() {
    //         return y;
    //     }
    //     public void setY(int y) {
    //         this.y = y;
    //     }
        
    // }
}
