from datetime import date

CAREER_START_DATE = date(2021, 8, 22)


def get_experience() -> str:
    today = date.today()

    years = today.year - CAREER_START_DATE.year
    months = today.month - CAREER_START_DATE.month
    days = today.day - CAREER_START_DATE.day

    if days < 0:
        months -= 1

    if months < 0:
        years -= 1
        months += 12

    return f"{years} years and {months} months"