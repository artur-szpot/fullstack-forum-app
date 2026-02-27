FROM python:3.14-slim

RUN mkdir -p app/
WORKDIR /app/

COPY requirements.txt .
RUN pip install --no-cache-dir

COPY . .

EXPOSE 3001

CMD ["python", "main.py"]
