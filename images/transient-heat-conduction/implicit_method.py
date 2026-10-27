# In this section I am importing all the libraries I will need
import numpy as np
import matplotlib.pyplot as pl
from scipy.linalg import solve_banded
import matplotlib.animation as animation

# In this section I am setting the domain of solution and the discretised grid
L = 1
dx = 0.01
tend = 1200
dt = 0.1
alpha = 1.17 * 10**-4
r = alpha*dt/(2*dx**2)

# In this section I am defining arrays I would need (if needed)
x = np.arange(0, L+dx, dx)
t = np.arange(0, tend+dt, dt)
Nx = len(x)
Nt = len(t)
T = np.ndarray((Nt, Nx))

# In this section I am setting the boundary conditions/initial values
T[:, 0] = 100
T[:, -1] = 20
T[0, :] = 20

# In this section I am implementing the numerical method
A = np.zeros((3, Nx-2))
A[0, 1:] = -r
A[1, :] = 1+2*r
A[2, :-1] = -r
for i in range(1, Nt):
    b = (1-2*r)*T[i-1, 1:-1] + r*T[i-1, :-2] + r*T[i-1, 2:]
    b[0] = b[0] + r*T[i-1, 0]
    b[-1] = b[-1] + r*T[i-1, -1]
    T[i, 1:-1] = solve_banded((1, 1), A, b)
    
# In this section I am showing the results
fig, ax = pl.subplots()
line, = ax.plot([], [])
time_template = 'time = %.0f s'
time_text = ax.text(0.05, 0.9, '', transform=ax.transAxes)
ax.set_xlim([0, 1])
ax.set_ylim([20, 100])
ax.set_xlabel('distance')
ax.set_ylabel('temperature')

def animate(k):
    line.set_data((x, T[k, :]))
    time_text.set_text(time_template % (k*dt))
    return line, time_text

ani = animation.FuncAnimation(fig, animate, Nt, interval=20)
pl.show()

for i in range(0, Nt):
    if i % 1200 == 0:
        pl.plot(x, T[i, :], label=str(i/600)+'min')
        pl.legend()
pl.xlabel('distance (m)')
pl.ylabel('temperature (C)')
pl.show()

for i in range(0, Nx):
    if i % 10 == 0:
        pl.plot(t/60, T[:, i], label=str(i/100)+'m')
        pl.legend()
pl.xlabel('time (min)')
pl.ylabel('temperature (C)')
pl.show()

x, t = np.meshgrid(x, t)
ax = pl.axes(projection='3d')
surf = ax.plot_surface(x, t/60, T)
ax.set_xlabel('distance (m)')
ax.set_ylabel('time (min)')
ax.set_zlabel('temperature (C)')
pl.show()

pl.contour(x, t/60, T)
pl.xlabel('distance (m)')
pl.ylabel('time (min)')
pl.colorbar()
pl.show()
