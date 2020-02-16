from django.db import models

# Create your models here.

class Comment(models.Model):
    CHARACTER_CHOICES = (
        ('BU', 'Bukko'),
        ('HO', 'Hojo')
        ('KE', 'Kejsaren'),
        ('LA', 'Lapsang'),
        ('ME', 'Mentorn'),
        ('MP', 'Marco Polo'),
        ('TO', 'Tomoe'),
    )

    character = models.CharField(max_length=2, choices=CHARACETER_CHOICES, null=False)
    text = models.CharField(max_length=500, blank=False)

    pub_date = models.DataTimeField('date published')
