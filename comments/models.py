from django.db import models
from django.utils import timezone

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

class Love(models.Model):
    GROUP_CHOICES = (
            ('DET', 'Dekor'),
            ('DIR', 'Directionen'),
            ('KM', 'KM'),
            ('KSP', 'KSP'),
            ('LED', 'Ledningen'),
            ('MAN', 'Manus'),
            ('MUS', 'Musikgruppen'),
            ('ORK', 'Orkestern'),
            ('PR', 'PR'),
            ('SKA', 'Skådis'),
            ('TEK', 'Tekniken'),
            ('UPP', 'Uppsättningen'),
    )

    group = models.CharField(max_length=3, choices=GROUP_CHOICES, null=False)
    text = models.CharField(max_length=500, blank=False)

    pub_date = models.DateTimeField('date published', default=timezone.now)

    def __str__(self):
        return "%s: %s" % (self.get_character_display(), self.text)