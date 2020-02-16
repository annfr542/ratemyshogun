from django.db import models
from django.utils import timezone

# Create your models here.

class Comment(models.Model):
    CHARACTER_CHOICES = (
        ('BU', 'Bukko'),
        ('HO', 'Hojo'),
        ('KE', 'Kejsaren'),
        ('LA', 'Lapsang'),
        ('ME', 'Mentorn'),
        ('MP', 'Marco Polo'),
        ('TO', 'Tomoe'),
    )

    character = models.CharField(max_length=15, choices=CHARACTER_CHOICES, null=False)
    text = models.CharField(max_length=500, blank=False)

    pub_date = models.DateTimeField('date published', default=timezone.now)

    def __str__(self):
        return "%s: %s" % (self.get_character_display(), self.text)
