import pygame
import sys
import random

# Initialize Pygame
pygame.init()

# Constants
WIDTH, HEIGHT = 800, 600
BALL_RADIUS = 15
PADDLE_WIDTH, PADDLE_HEIGHT = 15, 100
FPS = 60
WHITE = (255, 255, 255)

# Create the game window
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Simple Pong Game")

# Clock to control the frame rate
clock = pygame.time.Clock()

# Game variables
ball_speed = [5, 5]
ball_pos = [WIDTH // 2, HEIGHT // 2]
left_paddle_pos = [50, HEIGHT // 2 - PADDLE_HEIGHT // 2]
right_paddle_pos = [WIDTH - 50 - PADDLE_WIDTH, HEIGHT // 2 - PADDLE_HEIGHT // 2]
paddle_speed = 10

# Main game loop
while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    keys = pygame.key.get_pressed()
    if keys[pygame.K_UP] and right_paddle_pos[1] > 0:
        right_paddle_pos[1] -= paddle_speed
    if keys[pygame.K_DOWN] and right_paddle_pos[1] < HEIGHT - PADDLE_HEIGHT:
        right_paddle_pos[1] += paddle_speed

    if keys[pygame.K_w] and left_paddle_pos[1] > 0:
        left_paddle_pos[1] -= paddle_speed
    if keys[pygame.K_s] and left_paddle_pos[1] < HEIGHT - PADDLE_HEIGHT:
        left_paddle_pos[1] += paddle_speed

    # Update ball position
    ball_pos[0] += ball_speed[0]
    ball_pos[1] += ball_speed[1]

    # Ball collision with walls
    if ball_pos[1] - BALL_RADIUS <= 0 or ball_pos[1] + BALL_RADIUS >= HEIGHT:
        ball_speed[1] = -ball_speed[1]

    # Ball collision with paddles
    if (
        left_paddle_pos[0] <= ball_pos[0] - BALL_RADIUS <= left_paddle_pos[0] + PADDLE_WIDTH
        and left_paddle_pos[1] <= ball_pos[1] <= left_paddle_pos[1] + PADDLE_HEIGHT
    ) or (
        right_paddle_pos[0] - BALL_RADIUS <= ball_pos[0] <= right_paddle_pos[0] + PADDLE_WIDTH
        and right_paddle_pos[1] <= ball_pos[1] <= right_paddle_pos[1] + PADDLE_HEIGHT
    ):
        ball_speed[0] = -ball_speed[0]

    # Check for scoring
    if ball_pos[0] - BALL_RADIUS <= 0 or ball_pos[0] + BALL_RADIUS >= WIDTH:
        ball_pos = [WIDTH // 2, HEIGHT // 2]
        ball_speed[0] = -ball_speed[0]
        ball_speed[1] = random.choice([-5, 5])

    # Draw everything
    screen.fill((0, 0, 0))
    pygame.draw.circle(screen, WHITE, (int(ball_pos[0]), int(ball_pos[1])), BALL_RADIUS)
    pygame.draw.rect(screen, WHITE, (left_paddle_pos[0], left_paddle_pos[1], PADDLE_WIDTH, PADDLE_HEIGHT))
    pygame.draw.rect(screen, WHITE, (right_paddle_pos[0], right_paddle_pos[1], PADDLE_WIDTH, PADDLE_HEIGHT))

    # Update the display
    pygame.display.flip()

    # Cap the frame rate
    clock.tick(FPS)
