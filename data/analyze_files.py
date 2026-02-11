import json
import re

# Analyze Part 2
with open("/private/tmp/claude-501/-Volumes-Seagate-Exp-RETAILOR-Web-Web-Landing-Page-AIStudio-Retailor-AI-future-of-retail/tasks/aa39cc5.output", "r") as f:
    content2 = f.read()

idx = content2.find("[")
print("PART 2:")
print("First bracket at index:", idx)
print("Context before:", repr(content2[max(0,idx-200):idx]))
print("Total length:", len(content2))
ridx = content2.rfind("]")
print("Last bracket at index:", ridx)
print("Context after:", repr(content2[ridx+1:min(len(content2),ridx+200)]))
print()

# Analyze Part 3
with open("/private/tmp/claude-501/-Volumes-Seagate-Exp-RETAILOR-Web-Web-Landing-Page-AIStudio-Retailor-AI-future-of-retail/tasks/a905c16.output", "r") as f:
    content3 = f.read()

idx3 = content3.find("[")
print("PART 3:")
print("First bracket at index:", idx3)
print("Context before:", repr(content3[max(0,idx3-200):idx3]))
print("Total length:", len(content3))
ridx3 = content3.rfind("]")
print("Last bracket at index:", ridx3)
print("Context after:", repr(content3[ridx3+1:min(len(content3),ridx3+200)]))
