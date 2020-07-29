# from django.contrib.postgres.fields import DateTimeRangeField
from django.db import models

# Create your models here.


class Appointment(models.Model):
    title = models.CharField(max_length=128)
    # time_range = DateTimeRangeField()
    startDate = models.DateTimeField()
    endDate = models.DateTimeField()
    name = models.CharField(max_length=64, default="")
