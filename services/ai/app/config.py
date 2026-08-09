from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    database_url: str
    ollama_base_url: str = "http://host.docker.internal:11434"

    llm_model: str = "qwen3:4b"
    embedding_model: str = "qwen3-embedding:0.6b"

    model_config = SettingsConfigDict(
        env_file=".env",
        extra="ignore",
    )


settings = Settings()