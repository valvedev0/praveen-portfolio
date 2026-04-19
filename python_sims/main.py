import pygame
import sys

# Initialize Pygame
pygame.init()

# Set up the display
WIDTH, HEIGHT = 1280, 720
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Simulation Launcher")

# Colors
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
BLUE = (0, 100, 255)
GRAY = (200, 200, 200)

# Font
font_large = pygame.font.Font(None, 48)
font_medium = pygame.font.Font(None, 32)
font_small = pygame.font.Font(None, 24)

# Clock for FPS
clock = pygame.time.Clock()

def draw_text(surface, text, font, color, pos):
    """Draw text on the surface."""
    text_surface = font.render(text, True, color)
    surface.blit(text_surface, pos)

def main():
    running = True
    
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
        
        # Fill screen with white
        screen.fill(WHITE)
        
        # Draw title
        draw_text(screen, "Python Simulation Launcher", font_large, BLUE, (50, 50))
        
        # Draw simulations list
        simulations = [
            "1. N-Body Gravity Simulation",
            "2. Particle System",
            "3. Wave Simulation",
            "4. Cellular Automata",
        ]
        
        y_offset = 150
        for sim in simulations:
            draw_text(screen, sim, font_medium, BLACK, (100, y_offset))
            y_offset += 60
        
        # Draw instructions
        draw_text(screen, "Select a simulation or press ESC to exit", font_small, GRAY, (50, 650))
        
        # Update display
        pygame.display.flip()
        clock.tick(60)
    
    pygame.quit()

if __name__ == "__main__":
    main()
